/**
 *
 * Created by czg on 2017/4/29.
 */
(function ($) {
    function PreLoad(imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, PreLoad.DEFAULTS, options);

        this._unordered();


    }
    PreLoad.DEFAULTS = {
        each: null,//ÿһ��ͼƬ������Ϻ�ִ��
        all: null//����ͼƬ������Ϻ�ִ��
    };
    PreLoad.prototype._unordered = function () {
        //�������
        var imgs = this.imgs;
        var opts = this.opts;
        var count = 0;
        var len = imgs.length;

        $.each(imgs, function (i, src) {
            if (typeof src != 'string')return;
            var imgObj = new Image();
            $(imgObj).on('load error', function () {

                opts.each && opts.each(count);

                if (count >= len - 1) {
                    opts.all && opts.all();
                }
                count++;
            });
            imgObj.src = src;
        });
    };
    /*���ַ���
     $.fn.extend ->$('#img').preload()
     $.extend-> $.preload();*/
    $.extend({
        preload: function (imgs, options) {
            new PreLoad(imgs, options);
        }
    })

})(jQuery);





