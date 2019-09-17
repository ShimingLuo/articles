
const YuqueSDK = require('@yuque/sdk')

// 返回通用处理 -- 拦截器
function handler(res) {
  if(200 !== res.status) {
    const err = new Error(res.data.message)
    /* istanbul ignore next */
    err.status = res.data.status || res.status
    err.code = res.data.code
    err.data = res
    throw err
  }
  const { data } = res.data
  return data
}

class YuqueClient extends YuqueSDK {
  constructor(config) {
    let { baseUrl, token, login, repo } = config
    // 调用父级构造函数
    super({
      endpoint: baseUrl,
      token,
      handler,
    })
    // 文档区域
    this.namespace = `${ login }/${ repo }`
  }
  // 获取文章列表
  async getArticles() {
    const { docs, namespace } = this
    const result = await docs.list({
      namespace
    })
    return result
  }
  // 获取文章
  async getArticle(slug) {
    const { docs, namespace } = this;
    const result = await docs.get({
      namespace,
      slug,
      data: {
        raw: 1,// 返回文档最原始格式
      }
    });
    return result;
  }
}

async function start() {
  let client = new YuqueClient({
    baseUrl: 'https://www.yuque.com/api/v2/',
    token: 'JIMrrAUOSE3bZsBeLwWD6wKyGNUIbViarcouem3K',
    login: 'gavinluo',
    repo: 'blog',
  })
  let artciles = await client.getArticles()
  let realArticles = artciles.filter(artic => {
    return artic.published_at
  })
  for(let i = 0, article; i < realArticles.length; i++) {
    article = realArticles[i]
    let s = await client.getArticle(article.slug)
    console.log(s)
  }
}
//
start()