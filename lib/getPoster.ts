const getPosterImg = (imageUrl:string,fullSize:boolean) => {
    return imageUrl 
    ?`https://image.tmdb.org/t/p/${fullSize ? `original`:`w500`}${imageUrl}`:`https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif`
}

export default getPosterImg