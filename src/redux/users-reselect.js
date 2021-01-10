import {createSelector} from "reselect";

// export const getUsers = (state) => {
//     return state.usersPage.users;
// }
export const getUsers = state => state.usersPage.users;

export const getPageSize = state => state.usersPage.pageSize;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;

//Reselect for rendering PagesCountNumbers (for pagination) in the user page;
export const getPagesCount = createSelector(getTotalUsersCount, getPageSize, (totalUsersCount, pageSize) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return pages;
});


export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsFetch = state => state.usersPage.isFetch;
export const getFollowingProgress = state => state.usersPage.followingProgress;


