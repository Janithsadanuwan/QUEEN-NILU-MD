const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
name: { type: String },
bot: { type: Boolean},
announcement: { type: String },
permit: { type: String,  default: "false"},
afk:{ type: String,  default: "false"},
afktime: { type: Number,  default: 0 },
times: { type: Number,  default: 0 },
ban: { type: String,  default: "false"},
haig: { type: String,  default: "false"}
})

const sck1 =  mongoose.model("Sck1", UserSchema)


const BlockSchema = new mongoose.Schema({
    id: { type: String,required: true },
    reason: { type: String, default: "No Reason" },
    date: { type:  String, default: Date.now},
    group: { type: String, default: "In Private chat" },
    warnedby: { type: String, default: "false" }
    })
    const warndb =mongoose.model("warndb", BlockSchema)

 const NotesSchema = new mongoose.Schema({
        id: { type: String, required: true, unique: true },
        note: { type: String, default: "false"}
        
        })
  const notes =  mongoose.model("notes", NotesSchema)

    const CardSchema = new mongoose.Schema({
        id: { type: String ,default: "secfork" },
        count: { type: String,default:"0"},
        })
        const card =mongoose.model("card", CardSchema)

        const GroupSchema = new mongoose.Schema({
          id: { type: String,  unique: true ,required: true },
          events: { type: String, default: "false" },
          nsfw: { type: String, default: "false" },
          welcome:{ type: String, default: "@pp *Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th" },
          goodbye:{ type: String, default: "@pp *Another one bits dust.*\nUser: @user" },
          botenable: { type: String, default: "true" },
          antilink: { type: String, default: "false" },
          economy: { type: String, default: "false" },
          mute: { type: String },
          unmute: { type: String }
          })
          const sck =mongoose.model("Sck", GroupSchema)
          
module.exports = { sck1,warndb,notes,Sck,card}
