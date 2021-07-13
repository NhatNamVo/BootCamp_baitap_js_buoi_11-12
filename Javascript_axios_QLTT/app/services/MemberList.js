const APIlink = 'https://60ea64be5dd7ff0017b3975c.mockapi.io/Member';

function MemberData(){
    this.getData = function() {
        return axios({
            url: APIlink,
            method: 'GET'
        });
    };
    this.PostData = function(newMember){
        return axios({
            url: APIlink,
            method: 'POST',
            data: newMember
        })
    };
    this.DeleteData = function(id){
        return axios({
            url: APIlink + '/' + id,
            method: 'DELETE',
        })
    };
    this.GetRequestedData = function(id){
        return axios({
            url: APIlink + '/' + id,
            method: 'GET'
        })
    }
    this.PutUpdateData = function(id,updateMember){
        return axios({
            url: APIlink + '/' + id,
            method: 'PUT',
            data: updateMember
        })
    }
}