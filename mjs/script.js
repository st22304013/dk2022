$('.slider').slick({
    autoplay: true,//�����I�ɓ����o�����B�����l��false�B
    infinite: true,//�X���C�h�����[�v�����邩�ǂ����B�����l��true�B
    speed: 500,//�X���C�h�̃X�s�[�h�B�����l��300�B
    slidesToShow: 3,//�X���C�h����ʂ�3��������
    slidesToScroll: 1,//1��̃X�N���[����1���̎ʐ^���ړ����Č�����
    prevArrow: '<div class="slick-prev"></div>',//��󕔕�Preview��HTML��ύX
    nextArrow: '<div class="slick-next"></div>',//��󕔕�Next��HTML��ύX
    centerMode: true,//�v�f�𒆉����낦�ɂ���
    variableWidth: true,//���̈Ⴄ�摜�̍����𑵂��ĕ\��
    dots: true,//�����h�b�g�i�r�Q�[�V�����̕\��
});