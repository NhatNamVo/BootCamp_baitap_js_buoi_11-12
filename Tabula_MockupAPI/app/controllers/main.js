const $$= document.querySelector.bind(document);

var memberService = new MemberService();

function GetTeacherList(){
    memberService.getTeacher().then((teacherList)=>{
        TeacherRender(teacherList.data);
    }).catch((ERROR)=>{
        alert(ERROR);
    })
}

GetTeacherList();

function TeacherRender(teacherList){
    let teacherArr = '';
    teacherList.filter((teacher)=>{
        if(teacher.loaiND == 'GV'){
            if(teacher.hinhAnh == ''){
              imageTeacher = 'default.jpg'
            }else{
              imageTeacher = teacher.hinhAnh;
            }
            teacherArr += `
            <div class="agents__contentItem text-center col-12 col-sm-6 col-lg-3">
            <div class="contentItem__content">
              <div class="contentItem__img">
                <img src="./img/${imageTeacher}" alt="">
              </div>
              <div class="contentItem__text">
                <h4 class="contentItem__info">
                  <p class="info__nation">${teacher.ngonNgu}</p>
                  <p class="info__name">${teacher.hoTen}</p>
                </h4>
                <p class="contentItem__desc">
                    ${teacher.moTa}
                </p>
              </div>
            </div>
          </div>
            `
        }
    });
    $$('.agents__content').innerHTML = teacherArr;
}