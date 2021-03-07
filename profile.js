const constraints = {
    newigtag: {
        presence: false,
        length: {
            minimum : 5,
            message: "must be at least 5 digits"
        }
    },
    newfirstname: {
        presence: false,
        length: {
            minimum : 1,
            message: "must be at least 1 digits"
        }
    },
    newlastname: {
        presence: false,
        length: {
            minimum : 1,
            message: "must be at least 1 digits"
        }
    },
    newage: {
        presence: false,
        numericality: {
            lessThan: 150
        }
    },
    newgender: {
        presence: false,
    },
    newemail: {
        presence: false,
        email: true
    },
    newphone: {
        presence: false,
        numericality: {
            message: "must be the number."
        },
        length: {
            minimum : 10,
            maximum: 10,
            message: "must be 10 digits"
        },        
    },
    newdescription: {
        presence: false,
    },
}

const app = Vue.createApp({
    data() {
        return {
            
            profilepic :'/images/profile image.jpg',

            profileData: {firstname: 'Kritsanapon',
                            lastname: 'Rakkiatngam',
                            igtag : '@melolonjino',
                            description : 'Nice to meet you naKub!',
                            age: 20,
                            gender: 'Male',
                            email: 'kritsanapon.melo@mail.kmutt.ac.th',
                            phone: '080050XXXX'},
            
            newProfileData: {firstname: null,
                                lastname: null,
                                igtag : null,
                                description : null,
                                age: null,
                                gender: null,
                                email: null,
                                phone: null,},
            
            tags:[{tag: '#IT'},
                    {tag: '#UX/UI Designer'},
                    {tag: '#Game Designer'},
                    {tag: '#Gamer'}]
            ,
            button1 : 'Message',
            button2 : 'Follow',
            errors: null,
        }
    },   

    methods: {
        validate(){
            this.errors = validate({newigtag: this.newProfileData.igtag,
                                    newfirstname: this.newProfileData.firstname,
                                    newlastname: this.newProfileData.lastname,
                                    newage: this.newProfileData.age,
                                    newgender: this.newProfileData.gender,
                                    newemail: this.newProfileData.email,
                                    newphone: this.newProfileData.phone,
                                    newdescription: this.newProfileData.description,
                                    },
                                    constraints)
            if(!this.errors&this.newProfileData.igtag == null&this.newProfileData.firstname == null&this.newProfileData.lastname == null
                &this.newProfileData.age == null&this.newProfileData.gender == null&this.newProfileData.email == null&this.newProfileData.phone == null
                &this.newProfileData.description == null){
                alert("Not have any update.")
                }
            else if(!this.errors){
                this.updateData()
                this.clearData()
                alert("Your profile is updated successfully.")
            }
        },
        updateData(){
            if(this.newProfileData.igtag != null){
                this.profileData.igtag = this.newProfileData.igtag
            }
            if(this.newProfileData.firstname != null){
                this.profileData.firstname = this.newProfileData.firstname
            }
            if(this.newProfileData.lastname != null){
                this.profileData.lastname = this.newProfileData.lastname
            }
            if(this.newProfileData.age != null){
                this.profileData.age = this.newProfileData.age
            }
            if(this.newProfileData.gender != null){
                this.profileData.gender = this.newProfileData.gender
            }
            if(this.newProfileData.email != null){
                this.profileData.email = this.newProfileData.email
            }
            if(this.newProfileData.phone != null){
                this.profileData.phone = this.newProfileData.phone
            }
            if(this.newProfileData.description != null){
                this.profileData.description = this.newProfileData.description
            }
        },
        clearData(){
            this.newProfileData.firstname = null,
            this.newProfileData.lastname = null,
            this.newProfileData.igtag = null,
            this.newProfileData.description = null,
            this.newProfileData.age = null,
            this.newProfileData.gender = null,
            this.newProfileData.email = null,
            this.newProfileData.phone = null  
        }
    }
})

app.mount('#app')