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
        var i = 0
        var k = activity.length
        for (var j = 0; j < activity.length; j++) {
            if (activity[j].status == 1) {

                json_message.messages[0].message.replace(/\s/g, "")
                if (json_message.messages[0].message.search(/bm|BM/i) == 0) {
                    var people_name = json_message.messages[0].message.substr(2)
                    var phone_number = json_message.messages[0].phone
                    var join = JSON.parse(localStorage.getItem("join")) || []

                    if (!join.length) {
                        join.unshift({
                            actname:activity[j].name,
                            name: people_name,
                            phone: phone_number
                        })

                        localStorage.setItem('join', JSON.stringify(join))

                        native_accessor.send_sms(json_message.messages[0].phone, "恭喜报名成功！");
                    }
                    else{
                        for (var l = 0; l < join.length; l++) {

                            if (people_name == join[l].name) {
                                if (phone_number != join[l].phone) {
                                    join.unshift({
                                        actname:activity[j].name,
                                        name: people_name,
                                        phone: phone_number
                                    })

                                    localStorage.setItem('join', JSON.stringify(join))
                                    native_accessor.send_sms(json_message.messages[0].phone, "恭喜报名成功！");
                                    break

                                }
                                else{
                                    break
                                }
                            }
                            else{
                                join.unshift({
                                    actname:activity[j].name,
                                    name: people_name,
                                    phone: phone_number
                                })

                                localStorage.setItem('join', JSON.stringify(join))
                                native_accessor.send_sms(json_message.messages[0].phone, "恭喜报名成功！");
                                break

                            }

                         }
                    }

                }
//                    var sigh=true

                        break
                    }
                    if (activity[j].status == 2) {
                        native_accessor.send_sms(json_message.messages[0].phone, "报名已结束！");
                        break
                    }
                    if (activity[j].status == 0) {
                        i++
                        if (i == k) {
                            native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始！");
                        }
                    }
                }

//
            }


        }
        ;

        function notify_message_received(message_json) {
            //console.log(JSON.stringify(message_json));
            //JSON.stringify(message_json);
            //alert(JSON.stringify(message_json.messages));
            native_accessor.receive_message(message_json);
            //phone_number=message_json.messages[0].phone;
        }