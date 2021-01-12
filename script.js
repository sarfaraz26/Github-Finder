//main url : api.github.com/users 

let repo_names = [];
let repo_size=[];
let repo_forks=[];
let repo_watchers=[];

let form = document.querySelector('form');
let formInput = document.getElementById('form-input');
let row = document.querySelector('.row');

let userAvatar = document.getElementById('user-avatar');
let userName = document.getElementById('user-name');
let userLogin = document.getElementById('user-login');
let userFollowers = document.getElementById('user-followers');
let userFollowing = document.getElementById('user-following');
let userRepos = document.getElementById('user-repos');

let firstRepoTitle = document.getElementById('t1-title');
let firstRepoStar = document.getElementById('t1-star');
let firstRepoBranch = document.getElementById('t1-branch');
let firstRepoSize = document.getElementById('t1-size');

let secondRepoTitle = document.getElementById('t2-title');
let secondRepoStar = document.getElementById('t2-star');
let secondRepoBranch = document.getElementById('t2-branch');
let secondRepoSize = document.getElementById('t2-size');

let thirdRepoTitle = document.getElementById('t3-title');
let thirdRepoStar = document.getElementById('t3-star');
let thirdRepoBranch = document.getElementById('t3-branch');
let thirdRepoSize = document.getElementById('t3-size');

let fourthRepoTitle = document.getElementById('t4-title');
let fourthRepoStar = document.getElementById('t4-star');
let fourthRepoBranch = document.getElementById('t4-branch');
let fourthRepoSize = document.getElementById('t4-size');

let fifthRepoTitle = document.getElementById('t5-title');
let fifthRepoStar = document.getElementById('t5-star');
let fifthRepoBranch = document.getElementById('t5-branch');
let fifthRepoSize = document.getElementById('t5-size');

let sixthRepoTitle = document.getElementById('t6-title');
let sixthRepoStar = document.getElementById('t6-star');
let sixthRepoBranch = document.getElementById('t6-branch');
let sixthRepoSize = document.getElementById('t6-size');


let userAccountLink = document.getElementById('user-account-link');


row.style.display = "none";

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    row.style.display = "inline-flex";

    url = "https://api.github.com/users/"+formInput.value;
    urll = "https://api.github.com/users/"+formInput.value+"/repos";

// left column data fetching
    fetch(url).then(res=>{
        return res.json();

    }).then(data=>{

        userAvatar.src = data.avatar_url;
        userName.innerHTML = data.name;
        userLogin.innerHTML = data.login;
        userFollowers.innerHTML = data.followers;
        userFollowing.innerHTML = data.following;
        userRepos.innerHTML = data.public_repos;

        userAccountLink.href = "https://www.github.com/"+data.login;
        userAccountLink.innerHTML = "github.com/"+data.login;

    }).catch(err=>{
        alert("User does not exists");
    })


// right column data fetching
    fetch(urll).then(res=>{
        return res.json();

    }).then(data=>{

        for(let i=0;i<6;i++)
        {
            repo_names.push(data[i].name);
            repo_watchers.push(data[i].watchers);
            repo_size.push(data[i].size);
            repo_forks.push(data[i].forks);
        }

        firstRepoTitle.innerHTML = repo_names[0];
        firstRepoStar.innerHTML = " "+repo_watchers[0];
        firstRepoBranch.innerHTML = " "+repo_forks[0];
        firstRepoSize.innerHTML = " "+repo_size[0]+" KB";

        secondRepoTitle.innerHTML = repo_names[1];
        secondRepoStar.innerHTML = " "+repo_watchers[1];
        secondRepoBranch.innerHTML = " "+repo_forks[1];
        secondRepoSize.innerHTML = " "+repo_size[1]+" KB";

        thirdRepoTitle.innerHTML = repo_names[2];
        thirdRepoStar.innerHTML = " "+repo_watchers[2];
        thirdRepoBranch.innerHTML = " "+repo_forks[2];
        thirdRepoSize.innerHTML = " "+repo_size[2]+" KB";

        fourthRepoTitle.innerHTML = repo_names[3];
        fourthRepoStar.innerHTML = " "+repo_watchers[3];
        fourthRepoBranch.innerHTML = " "+repo_forks[3];
        fourthRepoSize.innerHTML = " "+repo_size[3]+" KB";

        fifthRepoTitle.innerHTML = repo_names[4];
        fifthRepoStar.innerHTML = " "+repo_watchers[4];
        fifthRepoBranch.innerHTML = " "+repo_forks[4];
        fifthRepoSize.innerHTML = " "+repo_size[4]+" KB";

        sixthRepoTitle.innerHTML = repo_names[5];
        sixthRepoStar.innerHTML = " "+repo_watchers[5];
        sixthRepoBranch.innerHTML = " "+repo_forks[5];
        sixthRepoSize.innerHTML = " "+repo_size[5]+" KB";


    })
});