document.addEventListener('DOMContentLoaded', function() {
    let messagesCounter = parseInt(localStorage.getItem('messagesCounter')) || 1;
    let friendsCounter = parseInt(localStorage.getItem('friendsCounter')) || 1;
    let jobsCounter = parseInt(localStorage.getItem('jobsCounter')) || 1;
    let feedCounter = parseInt(localStorage.getItem('feedCounter')) || 1;
    let profileCounter = parseInt(localStorage.getItem('profileCounter')) || 1;

    const feed = document.getElementById('feed');
    const messages = document.getElementById('messages');
    const jobs = document.getElementById('jobs');
    const profile = document.getElementById('profile');
    const friends = document.getElementById('friends');

    // Feed Counter
    feed.addEventListener('click', function(event) {
        feedCounter++;
        localStorage.setItem('feedCounter', feedCounter);
        console.log(feedCounter);
    });

    // Jobs Counter
    jobs.addEventListener('click', function(event) {
        jobsCounter++;
        localStorage.setItem('jobsCounter', jobsCounter);
        console.log(jobsCounter);
    });

    // Messages Counter
    messages.addEventListener('click', function(event) {
        messagesCounter++;
        localStorage.setItem('messagesCounter', messagesCounter);
        console.log(messagesCounter);
    });

    // Friends Counter
    friends.addEventListener('click', function(event) {
        friendsCounter++;
        localStorage.setItem('friendsCounter', friendsCounter);
        console.log(friendsCounter);
    });

    // Profile Counter
    profile.addEventListener('click', function(event) {
        profileCounter++;
        localStorage.setItem('profileCounter', profileCounter);
        console.log(profileCounter);
    });
});
