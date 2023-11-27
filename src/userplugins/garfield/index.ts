import { ApplicationCommandOptionType, OptionalMessageOption, findOption } from "../../api/Commands";
import definePlugin from "../../utils/types";


function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        callback(true);
    } else {
        img.onload = () => {
            callback(true);
        };

        img.onerror = () => {
            callback(false);
        };
    }
}

function garf() {
    const thirtymonths = [4, 6, 9, 11];
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let todayyear = new Date().getFullYear();
    let todaymonth = new Date().getMonth() + 1;
    let todaydate = new Date().getDate();
    var year = random(1978, todayyear);
    if (year == 1978) {
        var month = random(6, 12 + 1);
    } else if (year == todayyear) {
        var month = random(1, todaymonth + 1);
    } else {
        var month = random(1, 12 + 1);
    }


    if (month == 2) {
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            var day = random(1, 29 + 1);
        } else {
            var day = random(1, 28 + 1);
        }
    } else if (thirtymonths.includes(month)) {
        var day = random(1, 30 + 1);
    } else if ((year == 1978) || (month == 6)) {
        var day = random(19, 30 + 1);
    } else {
        var day = random(1, 31 + 1);
    }
    if (year == todayyear) {
        if (month == todaymonth) {
            var day = random(1, todaydate + 1);
        }
    }

    if (month <= 9) {
        var nmonth = month;
    } else {
        var nmonth = month;
    }

    if (month <= 9) {
        var montha = `0${month.toString()}`;
    } else {
        var montha = `${month.toString()}`;
    }

    if (day <= 9) {
        var daya = `0${day.toString()}`;
    } else {
        var daya = `${day.toString()}`;
    }



    var linky = `https://raw.githubusercontent.com/FluffyCookie000/garfield/main/comic/${year}/${nmonth}/ga${year.toString().slice(-2)}${montha}${daya}.gif`;


    checkIfImageExists(linky, (exists) => {
        if (exists) {
            return linky;

        } else {
            return linky;
        }
    });





}

export default definePlugin({
    name: "Garfield",
    authors: [{
        name: "FluffyCookie",
        id: BigInt(557286947106586627),
    }],
    description: "Adds a slash command to send a random garfield comic",
    dependencies: ["CommandsAPI"],
    commands: [{
        name: "Garfield",
        description: "Sends a garfield comic",
        options: [OptionalMessageOption],
        execute: opts => ({
            content: findOption(opts, "message", "") + `${garf()}`
        })
    }]
});