

const users = [
    {
        id : 1,
        name : 'tan phat',
    },
    {
        id : 2,
        name : 'ngan tran'
    },
    {
        id : 3,
        name : 'dang nghia'
    },
];

const comments = [
    {
        id : 1,
        user_id: 2,
        content : 'hello'
    },
    {
        id : 2,
        user_id:1,
        content : 'bye'
    },
    {
        id : 2,
        user_id:3,
        content : 'we need to talk'
    },

];

// buoc 1: lay cmts
// buoc 2: tu cmts lay user_id
// buoc 3: tu user_id lay ra binh luan tuong ung

// fake API 
function getComments() {
    return new Promise(function(resolve)  {
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    })
}

getComments()
    .then(function(comments){
        console.log(comments);
    });


// document.getElementById("root").innerHTML = users[1]

