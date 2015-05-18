/** 2015,SINOVATE-UED. */
$(document).ready(function() {
    var PG = {
        _OT: $(".OT").length ? 1 : 0,
        _CM: $(".CM").length ? 1 : 0,
        _RB: $(".RB").length ? 1 : 0
    };

    /**
     * 点击内部标题滑动其下辖内容
     */
    function slideContent(wrap_selor, title_selor, ctn_selor, ishide) {
        var ishide = ishide || false;

        function toggleBody() {
            this.siblings(ctn_selor).animate({
                height: "toggle"
            }, 50);
        };
        if (ishide) {
            toggleBody.call($(wrap_selor).find(title_selor));
        }
        //委托click事件，目标slide_title
        $(wrap_selor).on("click", title_selor, function(event) {

            toggleBody.call($(this));
        });
    };
    /* function description,for page index*/
    if (PG._OT) {
        //使用lib momentjs创建规定的日期格式
        $("input[type=date]").val(moment().format('YYYY-MM-DD'));
    }
    //
    if (PG._CM) {
        slideContent(".Vpanel", ".hd", ".bd", true);
    }
    //
    if (PG._RB) {
        //实例化数字旋钮
        $(".simNumSpinner").simNumSpinner({
        });
        $(".simNumSpinner").find(".numbox").attr('disabled', 'true');
        $(".RB.dtform .allow").click(function(event) {
            $(".simNumSpinner").find(".numbox").attr('disabled', !$(this).prop('checked'));
        });
    }
});
