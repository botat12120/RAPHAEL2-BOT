
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["Guru", "Guru1", "Guru2", "Guru3", "Guru4"])}.mp3`

conn.sendButton(m.chat, `مرحبًا *${name}* \n \nهل تريد المساعدة? \n`, igfg, null, [
      ['⦙☰ القائمة', '/help'],
      ['⦙☰ القائمة 2', '/menu2'],
      ['⌬ المجموعات', '/gpdylux']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|guru)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}