let stuffArray = [1,2,3,4]


function Speaker(givenName, surname, email, biography) {
    this.givenName = givenName;
    this.surname = surname;
    this.email = email;
    this.biography = biography;
    this.isActive = true;
}

Speaker.prototype = {

    getBiography: function (givenName, biography) {
        console.log("Hi, my name is", this.givenName + " " + this.biography)
    },

    markInActive: function (date) {
        if (this.isActive && date) {
            this.isActive = false;

        }
        console.log(this.isActive + ", " + this.givenName + " is not here on " + date)
    }
}

function KeynoteSpeaker(givenName, surname, email, biography, stuffArray) {

    Speaker.call(this, givenName, surname, email, biography)
    this.websiteArray = [];
    this.keynoteTopicsArray = [];
    this.breakoutsArray = [];
    

}

function WorkshopSpeaker(givenName, surname, email, biography) {

    Speaker.call(this, givenName, surname, email, biography)

    this.workshopTopics = [];
   
}

KeynoteSpeaker.prototype = Object.create(Speaker.prototype)
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker;

WorkshopSpeaker.prototype = Object.create(Speaker.prototype)
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker;



const David = new Speaker("David", "Stewart", "david@hotmail.com", "passionate about potatos");
const Key = new KeynoteSpeaker("Kyle", "Meiklejohn","kyle@stuff.com", "hates potatos");
const Work = new WorkshopSpeaker("Patty", "Mayo", "pattymayo@email.com", "into Doug");


David.getBiography()
David.markInActive("May 31, 3000")
Key.getBiography()
Key.markInActive("May 31, 3000")
Work.getBiography()
Work.markInActive("May 31, 3000")
