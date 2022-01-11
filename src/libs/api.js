import $http from './http'

/**
 * 获取科室列表
 */
export const allDepartment = (data) => $http({
    url: '/qualification/find/all/department',
    method: 'get',
    params: data
})
/**
 * 用量单位
 */
export const allDosage = (data) => $http({
    url: '/qualification/find/all/dosage/unit',
    method: 'get',
    params: data
})
// 药品列表
export const allDrug = (data) => $http({
    url: '/qualification/find/all/drug',
    method: 'post',
    data: data
})
// 民族列表
export const allNation = (data) => $http({
    url: '/qualification/find/all/nation',
    method: 'post',
    data: data
})
// 行政区编码
export const areaCoding = (data) => $http({
    url: '/qualification/find/area/codinnng',
    method: 'post',
    data: data
})
// 医嘱类型编码
export const doctorAdvice = (data) => $http({
    url: '/qualification/find/doctor/advice',
    method: 'post',
    data: data
})
// 给药途径
export const deliveryRoute = (data) => $http({
    url: '/qualification/find/drug/delivery/route',
    method: 'post',
    data: data
})
// 就诊原因
export const reasonVisit = (data) => $http({
    url: '/qualification/find/reason/visit',
    method: 'post',
    data: data
})
// 侯症编码
export const syndromeCoding = (data) => $http({
    url: '/qualification/find/syndrome/coding',
    method: 'post',
    data: data
})
// 诊断编码
export const diseaseDiagnosis = (data) => $http({
    url: '/qualification/find/tcm/disease/diagnosis',
    method: 'post',
    data: data
})
// 用药频度
export const tcmRequency = (data) => $http({
    url: '/qualification/find/tcm/requency',
    method: 'post',
    data: data
})
// 数据上传
export const upload = (data) => $http({
    url: '/diagnosis/record/diagnosis/upload',
    method: 'post',
    data: data
})
// ADT 发布审核接口
export const slStandardDataRelease = (data) => $http({
    url: 'slStandard/dataRelease',
    method: 'post',
    data: data
})