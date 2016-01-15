function twelve_hour_clock(now) {
    $('.twelve-hour p').html(
        moment(now).format('h:mm:ss a')
    );
}

function twenty_four_hour_clock(now) {
    $('.twenty-four-hour p').html(
        moment(now).format('HH:mm:ss')
    );
}

function unix_timestamp_clock(now) {
    $('.unix-timestamp p').html(
        moment(now).format('X')
    );
}

function decimal_time_clock(now) {
    var time = (((now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds())/86400)*10;
    $('.decimal-time p').html(time.toFixed(4));
}

function astronomical_clock(now) {
    function romanize(num) {
        var digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC",
                   "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX",
                   "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI",
                   "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        
        while (i--) {
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        }
        return Array(+digits.join("") + 1).join("M") + roman;
    }
    
    $('.astronomical p').html(romanize(now.getHours()));
}

function update_clocks() {
    var now = new Date;
    twelve_hour_clock(now);
    twenty_four_hour_clock(now);
    unix_timestamp_clock(now);
    decimal_time_clock(now);
    astronomical_clock(now);
}

$(document).ready(function() {
    setInterval(function () { update_clocks(); }, 1000);
});