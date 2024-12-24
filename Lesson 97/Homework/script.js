const emails = [
    { subject: "Travel", content: "Don't forget your tickets", receivedDate: "2024-12-15" },
    { subject: "Report", content: "Please review the latest report", receivedDate: "2024-12-12" },
    { subject: "Travel", content: "Great offer for your trip", receivedDate: "2024-12-13" },
    { subject: "Awareness", content: "There might be minor errors", receivedDate: "2024-12-10" }
  ];
  
  const subjectFilter = document.getElementById('subjectFilter');
  const filterButton = document.getElementById('filterButton');
  const resetButton = document.getElementById('resetButton');
  const emailList = document.getElementById('emailList');
  
  filterButton.addEventListener('click', () => {
    const selectedSubject = subjectFilter.value;
    emailList.innerHTML = '';
  
    for (const email of emails) {
      if (selectedSubject === '' || email.subject === selectedSubject) {
        const li = document.createElement('li');
        li.textContent = `Subject: ${email.subject}, Content: ${email.content}, Date: ${email.receivedDate}`;
        emailList.appendChild(li);
      }
    }
  });
  
  resetButton.addEventListener('click', () => {
    subjectFilter.value = '';
    emailList.innerHTML = '';
  });
  