// 
//  Declaracao addMessage
// 
export const addMessage = async (message, channel_id, user_id) => {
    try {
      let { body } = await supabase.from('messages').insert([{ message, channel_id, user_id }])
      return body
    } catch (error) {
    }
  }


// 
//  Execucao addMessage
// 
<MessageInput onSubmit={async (text) => addMessage(text, channelId, user.id)} />
