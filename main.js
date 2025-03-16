document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();  
      const commentaire = document.getElementById('cmt').value;

      
      const botToken = "7894685926:AAGezz-Xi0SZWWWhGGDAwiD1yxpHdCiIjRE";
      const chatId = "7879061625";
      const message = `Nouveau commentaire : ${commentaire}`;

    
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

      
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Message envoyé à Telegram :", data);
        alert("Ton commentaire a été envoyé !");
      })
      .catch(error => {
        console.error("Erreur lors de l'envoi du message :", error);
        alert("Erreur lors de l'envoi du commentaire.");
      });
    });
    document.getElementById("year").textContent = new Date().getFullYear();
    const date =  new Date();
    
    document.getElementById('timer').innerHTML=`${date.getHours pas()}`