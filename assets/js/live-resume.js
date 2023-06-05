$('[data-toggle="collapsible-nav"]').on('click', function(e){
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(
    function() {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }, 
    
    function (event) {

        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);

function shareWeb() {
    // Lấy URL hiện tại của trang web
    var currentURL = window.location.href;

    // Kiểm tra xem URL có hợp lệ không
    if (currentURL !== '') {
        // Tạo URL chia sẻ bằng cách thêm URL hiện tại vào đường dẫn chia sẻ của Facebook
        var shareURL = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentURL);

        // Mở cửa sổ chia sẻ mới
        window.open(shareURL, '_blank');
    }
}

function downloadCV() {
    // Đường dẫn đến tệp CV của bạn
    var cvURL = "/assets/images/CV_SMPhuc.pdf";

    // Tạo một phần tử a ẩn
    var link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    // Đặt đường dẫn tệp CV cho phần tử a
    link.href = cvURL;

    // Đặt tên tệp CV
    link.download = 'CV_SMPhuc.pdf';

    // Simulate click vào phần tử a để tải xuống tệp CV
    link.click();

    // Xóa phần tử a
    document.body.removeChild(link);
}