export const SAVE_USER_INFO = "SAVE_USER_INFO"


export const saveUserInfo = (userInfo) => ({
	type: SAVE_USER_INFO,
	userInfo
})