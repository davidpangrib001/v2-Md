const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Seseorang;;;'
                    + 'FNYang Bernama David\n' // full name
                    + 'ORG:Dia Bocil Bang;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282160268332:+6282160268332\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Davitt', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
