var btnOpenSchedule = document.getElementById('open-popup-schedule'),
    overlaySchedule = document.getElementById('overlay-schedule'),
    popupSchedule = document.getElementById('popup-schedule'),
    btnCloseSchedule = document.getElementById('btn-close-schedule');

btnOpenSchedule.addEventListener('click', function() {
    overlaySchedule.classList.add('active');
    popupSchedule.classList.add('active');
});

btnCloseSchedule.addEventListener('click', function() {
    overlaySchedule.classList.remove('active');
    popupSchedule.classList.remove('active');
});

var btnOpenContact = document.getElementById('open-popup-contact'),
    overlayContact = document.getElementById('overlay-contact'),
    popupContact = document.getElementById('popup-contact'),
    btnCloseContact = document.getElementById('btn-close-contact');

btnOpenContact.addEventListener('click', function() {
    overlayContact.classList.add('active');
    popupContact.classList.add('active');
});

btnCloseContact.addEventListener('click', function() {
    overlayContact.classList.remove('active');
    popupContact.classList.remove('active');
});

var btnOpenSocialMedia = document.getElementById('open-popup-social-media'),
    overlaySocialMedia = document.getElementById('overlay-social-media'),
    popupSocialMedia = document.getElementById('popup-social-media'),
    btnCloseSocialMedia = document.getElementById('btn-close-social-media');

btnOpenSocialMedia.addEventListener('click', function() {
    overlaySocialMedia.classList.add('active');
    popupSocialMedia.classList.add('active');
});

btnCloseSocialMedia.addEventListener('click', function() {
    overlaySocialMedia.classList.remove('active');
    popupSocialMedia.classList.remove('active');
});