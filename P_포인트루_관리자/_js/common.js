$(function () {
	/* Nice Select */
	$(".nice-select").niceSelect();

	// 푸터 사업자정보 버튼
	$('.btn_open_company').click(function () {
		$('#page-wrap').toggleClass('ft_open')
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	})

	// 푸터 scrolltop
	$("#footer .scroll-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 500);
	});

	// 헤더 삼선메뉴 클릭시 우측에서 서브메뉴 노출
	$('#header .btn_menu').click(function () {
		$('.sub-menu').addClass('active')
	})

	// 서브메뉴 좌측 닫기 버튼 클릭시 서브메뉴 닫힘
	$('.sub-menu .sub-menu__header .btn_back').click(function () {
		$('.sub-menu').removeClass('active')
	})

	// 인풋박스 delete 버튼 클릭시 내용 지움
	$('.input_box .input input').click(function () {
		$('.input_box .input input').siblings('.btn_delete').hide()
		$(this).siblings('.btn_delete').show()
	})

	$('.input_box .input .btn_delete').click(function () {
		$(this).siblings('input').val('')
		$(this).hide()
	})

	var startX,startY, endX,endY;
	
	// 모달 상단 바 잡고 내릴때 모달 닫힘
	$(".modal__close").on('touchstart',function(event){
		startX = event.originalEvent.changedTouches[0].screenX;
		startY = event.originalEvent.changedTouches[0].screenY;
	});
	
	$(".modal__close").on('touchend',function(event){
		endX=event.originalEvent.changedTouches[0].screenX;
		endY=event.originalEvent.changedTouches[0].screenY;
		if(endY-startY>50){
			$('.modal .modal__inner').removeClass('active')
			$("body").css("overflow-y", "auto");
			setTimeout(function () {
				$('.modal').hide()
			}, 100)
		}
	});

	window.onclick = function (event) {
    if (event.target.closest('.modal') && event.target.closest('.modal__inner') == null) {
			$(`.modal .modal__inner`).removeClass('active')
			$("body").css("overflow-y", "auto");
			setTimeout(function () {
				$('.modal').hide()
			}, 100)
    }
  };
})

var agent = navigator.userAgent.toLowerCase();

function openModal(id) {
	$('#' + id).show()
	setTimeout(function () {
		$(`#${id} .modal__inner`).addClass('active')
	}, 50)
	
	$('body').css('overflow-y', 'hidden')
	
}

function closeModal(id) {
	$(`#${id} .modal__inner`).removeClass('active')
	$("body").css("overflow-y", "auto");
	setTimeout(function () {
		$('.modal').hide()
	}, 100)
	
}

function closeAllModal() {
	$('.modal').hide()
}
