// export const getUsers = (state) => {
//     return state.usersPage.users;
// }
export const getUsers = state => state.usersPage.users;
export const getPageSize = state => state.usersPage.pageSize;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsFetch = state => state.usersPage.isFetch;
export const getFollowingProgress = state => state.usersPage.followingProgress;


