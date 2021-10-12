import $http from './http'

/**
 * 作业平台 ADT短链
 */
export const allDepartment = (data) => $http({
    url: '/qualification/find/all/department',
    method: 'get',
    params: data
})
// ADT短链 发布列表
export const slStandardReleasePage = (data) => $http({
    url: '/slStandard/releasePage',
    method: 'get',
    params: data
})
// 短链的详情编辑
export const slStandardCompletion = (data) => $http({
    url: 'slStandard/completion',
    method: 'post',
    data: data
})
// ADT 发布审核接口
export const slStandardDataRelease = (data) => $http({
    url: 'slStandard/dataRelease',
    method: 'post',
    data: data
})