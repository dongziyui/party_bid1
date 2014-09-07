//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//

var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {
        var activity = JSON.parse(localStorage.getItem("activity"))
//        console.log(json_message.messages[0].message)
        for (var j = 0; j< activity.length; j++) {
            if (activity[j].status == 1) {
                console.log("恭喜报名成功！")
                json_message.messages[0].message.replace(/\s/g, "")
                json_message.messages[0].message.search(/bm|BM/i)
                if (i == 0) {
                   var people_name=json_message.messages[0].message.substr(2)
                   var phone_number=json_message.messages[0].phone
                }
                var join=JSON.parse(localStorage.getItem("join"))||[]
                if(!join){
                    join.unshift({
                        name: people_name,
                        phone: phone_number
                    })
                }
                else {
                    for (var j = 0; j < join.length; j++) {
                        if(((people_name==join[j].name)||(people_name!=join[j].name))&&(phone_number!=join[j].name))
                        join.unshift({
                            name: people_name,
                            phone: phone_number
                        })
                    }
                }
                localStorage.setItem('join', join)
                break
            }
        else
        {
            if (activity[j].status == 0) {
                var commit = true
            }
            else {
                commit = false
            }
        }
        if (commit == true) {
            console.log("活动尚未开始！")

        }
        else {
            console.log("报名已结束！")
        }
    }
}

//                (activity[i].status==0){
//                console.log("活动尚未开始！")
//            }
//            else
//            }
//            else{
//                console.log("报名已结束！")
//            }
//
//        }
////        if()
//        console.log(json_message)
//
//    }


}
;

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
