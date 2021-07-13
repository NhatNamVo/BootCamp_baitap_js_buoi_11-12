
function MemberService(){
    this.getTeacher = function(){
        return axios({
            url: 'https://60ea64be5dd7ff0017b3975c.mockapi.io/Member',
            method: 'GET'
        });
    }
}