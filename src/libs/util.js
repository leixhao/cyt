
import { forEach, hasOneOf, objEqual } from '@/libs/tools'
import config from '@/config'
const { title} = config

export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode
  if (parentNode) {
    let classList = parentNode.classList
    if (classList && classes.every(className => classList.contains(className))) {
      return parentNode
    } else {
      return findNodeUpperByClasses(parentNode, classes)
    }
  }
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
}
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
        obj.children = getMenuByRouter(item.children, access)
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href
      if (showThisMenuEle(item, access)) res.push(obj)
    }
  })
  return res
}

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const getBreadCrumbList = (route, homeRoute) => {
  // let homeItem = { ...homeRoute, icon: homeRoute.meta.icon }
  let routeMetched = route.matched
  // if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  routeMetched[routeMetched.length-1].meta.to=route.fullPath
  let res = routeMetched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    let meta = { ...item.meta }
    if (meta.title && typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      meta.title = meta.title(route)
    }
    let obj = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: meta,
      to : (item.meta && item.meta.to) || ''
    }
    return obj
  })
  // res = res.filter(item => {
  //   return !item.meta.hideInMenu
  // })
  return [...res]

}
//深度克隆对象
export const  clone=(obj)=>{
  //确定result的类型
  let result;
  if (obj instanceof Array) {
      result = [];
  } else if (obj instanceof Object) {
      result = {};
  } else {
      return obj;
  }
  for (let key in obj) {
      let copy = obj[key];
      if (typeof copy === 'object') {
          result[key] = clone(copy);
      } else {
          result[key] = obj[key];
      }
  }
  return result;
}
export const getRouteTitleHandled = (route) => {
  let router = { ...route }
  let meta = { ...route.meta }
  let title = ''
  if (meta.title) {
    if (typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      title = meta.title(router)
    } else title = meta.title
  }
  meta.title = title
  router.meta = meta
  return router
}

export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta
  if (!title) return
  // if (useI18n) {
  //   if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
  //   else if (__titleIsFunction__) title = item.meta.title
  //   else title = vm.$t(item.name)
  // } else
  title = (item.meta && item.meta.title) || item.name
  if (title.indexOf('数据同步任务创建') > -1) {
    // debugger;
  }
  if(title.length > 8){
    return title.substring(0,8) + '...'
  }
  return title
}


/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}





/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children)
      } else if (item.name === name) {
        return hasAccess(access, item)
      }
    })
  }

  return routePermissionJudge(routes)
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}




export const showByAccess = (access, canViewAccess) => {
  return hasOneOf(canViewAccess, access)
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export const formatDate=(date, fmt)=> {
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  }
  for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
  }
  return fmt
}
/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList, routeItem) => {
  let len = tagNavList.length
  let res = false
  doCustomTimes(len, (index) => {
    if (routeEqual(tagNavList[index], routeItem)) res = true
  })
  return res
}

export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}

export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}

// scrollTop animation
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}
/**
 * @param {Array} list 树转列表
 * @returns {Array}
 */
export const deepTraversal =(data) =>{
  const result = [];
  data.forEach(item => {
      const loop = data => {
          result.push(data);
          let child = data.children
          if(child){
            for(let i = 0; i < child.length; i++){
              loop(child[i])
            }
          }
      }
      loop(item);
  })
  return result;
}


/**
 * um接口转动态路由
 * @param {Array} menuList  菜单数组
 * @param {Array} buttonList 按钮数组
 * @param {vue} Main  路由主组件
 * @param {vue} parentView 路由父组件
 * @returns {Array} 
 */
export const getRouter=function(menuList,buttonList,Main,parentView){
  /**
   * 找出无children节点
   * list：待查找数组
  */
  let calNoChildrenNodes = function(list) {
    let noChildrenNodes = [];
    let checkHaveChildren = function(node) {
        let notHave = !node.children || node.children.length == 0;
        return !notHave;
    }
    let loopList = function(paramList) {
      paramList.map(loopNode => {
          if (checkHaveChildren(loopNode)) {  // 有子节点，继续查找
              loopList(loopNode.children);
          } else {
              noChildrenNodes.push(loopNode);
          }
      })
    }
    loopList(list);
    return noChildrenNodes;
  }
  /**
   * 遍历节点赋值
   * node：节点
   * list：待赋值数组
  */
  let assignNodeChildren = function(node, list) {
    let filterItems = list.filter(item => {
        return item.uri == node.uri
    });
    if (filterItems.length > 0) {
        filterItems[0].children.forEach(v=>{
          v.parentId = node.id;
        })
        node.children = filterItems[0].children;
    }
  }
  calNoChildrenNodes(menuList).map(node => {
    assignNodeChildren(node, buttonList);
  })

  let  list = deepTraversal(menuList);
  //定义路由数组
  let menuRouters =[];
  // 生成路由数组的第一级菜单
  list.forEach((m, i) => {
      if (m.parentId == 0) {
          // m.fullPath = '/' + m.path
          let module = {
              path: m.uri,
              name:m.uri.split("/")[1],
              component: Main,
              redirect:m.children&&m.uri.indexOf('massage')==-1?m.children[0].uri:m.uri,
              meta: { 
                id: m.id, 
                title: m.name,showAlways:m.uri.indexOf('massage')==-1?true:false,
                icon:m.uri.indexOf('massage')>-1?'md-notifications-outline'
                :m.uri.indexOf('metaManage')>-1?'md-list-box'
                :m.uri.indexOf('consanguinity')>-1?'md-analytics'
                :m.uri.indexOf('tasks')>-1?'ios-paper':'md-settings'},
              
          }
          m.uri.indexOf('massage')>-1?module.children=[{//处理菜单
            path: '',
            component:() =>  import('@/views' + m.uri+'/index.vue'), 
            name:`_${m.uri.split("/")[m.uri.split("/").length-1]}`,
            meta: {
                hideInMenu: true,
                title: m.name,
                hideInBread:true,
                activeName: m.uri.split("/")[1]
            }
        }]:'';
          menuRouters.push(module)
      }
  })
  //生成路由数组的二级菜单及内容页面
  let  convertTree=function(routers) {
    /**
     * 判断路由是否满足条件
     * moduleName：模块名称
     * length：长度
     * m：内层路由对象
     * r：外层路由对象
    */
    let checkInRange = (moduleName, length, m, r) => {
        let checkOk = m.uri.indexOf(moduleName)>-1&&m.uri.split("/").length>length&&!r.children.some(v=>{return v.path==''});
        return checkOk;
    }
    /**
     * 处理路由
     * m：内层路由对象
     * r：外层路由对象
     * index：索引
    */
    let handleRouterChildren = (m, r, index) => {
        let pathArr=m.uri.split("/");
        let strArr =[];
        pathArr.forEach((v,i)=>{
          if(i<pathArr.length-1){
            strArr.push(v);
          }
        })
        r.meta.to = strArr.join("/");
        r.redirect= strArr.join("/");
        r.children.push({
          path: '',
          component:() =>  import('@/views' + strArr.join("/")+'/index.vue'), 
          name:`_${strArr[strArr.length-1]}`,
          meta: {
              hideInMenu: true,
              title: r.meta.title,
              hideInBread:true,
              activeName: strArr[index]
          }
        })
    }
    
    /**
     * 计算菜单隐藏，按钮隐藏
    */
    let calHideInMenu = (routeObj) => {
      let calButtons = [] ;
      buttonList.map(item => {
        if (item.children) {
          calButtons = calButtons.concat(item.children)
        }
      })
      let hideInMenu = calButtons.some(item => {
        return item.uri == routeObj.uri
      })
      return hideInMenu;
    }
    routers.forEach(r => {
        list.forEach((m, i) => {
            if (m.parentId && m.parentId == r.meta.id) {
                if (!r.children) r.children = [];
                if(checkInRange('metaManage', 4, m, r)){//元数据管理处理
                  handleRouterChildren(m, r, 3);
                }
                if (checkInRange('systemManage', 3, m, r)) {
                    handleRouterChildren(m, r, 2)
                }
                if (checkInRange('tasks', 3, m, r)) {
                    handleRouterChildren(m, r, 2)
                }
                if (checkInRange('consanguinity/AlarmConfig', 3, m, r)) {
                  handleRouterChildren(m, r, 2)
                }
                if (checkInRange('consanguinity/analyse', 4, m, r)) {
                    handleRouterChildren(m, r, 3)
                }
                let menu = {
                    path: m.uri,
                    name:m.uri.split("/")[m.uri.split("/").length-1],
                    meta: { 
                      id: m.id,
                      title: m.name ,
                      hideInMenu: calHideInMenu(m)
                    }
                }
                
                if(m.uri.indexOf("metaManage")>-1){
                  menu.meta.activeName = m.uri.split("/")[3]
                  m.uri.split("/").length==3?
                  menu.redirect = m.children[0].uri:"";
                    
                }else if(m.uri.indexOf("systemManage")>-1){
                  menu.meta.activeName = m.uri.split("/")[2]
                }else if(m.uri.indexOf("massage")>-1){
                  menu.meta.activeName = 'massage'
                }else if(m.uri.indexOf("analyse/data")>-1||m.uri.indexOf("analyse/task")>-1){
                  menu.meta.activeName = m.uri.split("/")[3]
                }else {
                  menu.meta.activeName = m.uri.split("/")[2]
                }
                let routerMaps = ['operationlog', 'fullTextSearch','taskConfig'];
                let inRouterMaps = routerMaps.some(name => {
                    return m.uri.includes(name);
                })
                if(m.children&&m.children.length>0){
                  menu.component = parentView;
                }else if( inRouterMaps ){   // 自定义部分,路由这块问题很大，需重构
                  menu.component= ()=>import('@/views'+m.uri+'/index.vue');
                } else{
                  menu.component= ()=>import('@/views'+m.uri+'.vue');
                }
                r.children.push(menu);
            }
        })
        if (r.children) convertTree(r.children)
    })
  }

  convertTree(menuRouters);
  return menuRouters;
}

// 事件防抖
export const DebounceBy = (fn, t) => {
  let delay = t || 500
  let timer
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
 
    let callNow = !timer
 
    timer = setTimeout(() => {
      timer = null
    }, delay)
 
    if (callNow) fn.apply(this, args)
  }
}





export const validateName = (val) => {
  var reg = /^[0-9A-Za-z-\u4e00-\u9fa5\_]{0,255}$/;
  return reg.test(val);
}
export const validateName30 = (val) => {
  var reg = /^[0-9A-Za-z-\u4e00-\u9fa5\_]{0,30}$/;
  return reg.test(val);
}

export const validateCode = (val) => {
  var reg = /^[A-Za-z0-9-\_]{0,255}$/;
  return reg.test(val);
}

export const validateLenDefault = (val) => {
  var reg = /^[\d\D]{0,255}$/;
  return reg.test(val);
}
