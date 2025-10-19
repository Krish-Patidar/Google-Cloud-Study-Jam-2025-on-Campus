// Google Cloud Study Jam 2025 Website Script
// Author: GDGoC PIEMR

// ========== Circular Progress Bar =============
window.addEventListener('DOMContentLoaded', () => {
  // Animate circular progress bar to 69%
  const progress = 75; // Target percent
  const circle = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  let current = 0;
  function animateProgress() {
    if (current <= progress) {
      progressText.textContent = current + '%';
      circle.style.background = `conic-gradient(var(--gcp-green) 0% ${current}%, #dadada ${current}% 100%)`;
      current++;
      requestAnimationFrame(animateProgress);
    } else {
      progressText.textContent = progress + '%';
      circle.style.background = `conic-gradient(var(--gcp-green) 0% ${progress}%, #dadada ${progress}% 100%)`;
    }
  }
  animateProgress();

  // ========== Leaderboard Data =============
  const students = [
    'Nirali Kankane', 'Amarnath Jogi', 'Geetanjali Kaushal', 'Aditya Kapse','Narendra Yadav','Samarth Thakre','Vansh Gupta','Vishakha Chauhan','Shruti Pardeshi','Shorya Agarwal','Shehzan Khan','Ayush Sahu','Rizwan Sheikh','Rohit Rajure','Prakhar Keshniya','Gaurav Pandey','Akanksha Mishra','Nakul Rathore','Hasan Malubhaiwala','Saloni Patidar','Priyank Mehta','Harshvardhan Singh Ranawat','Preyansh Pandey','Muskan Regar','Vivek Vishwakarma','Madhavi Kushwah','Rashi Bhawsar','Aarshi Soni','Divya Shukla','Lokesh Kumar','Anushka Porwal','Aarushi Shukla','Sneha Singh','Anandita Arora','Shivanurag Yayavaram','Rakshita Patil','Rohan Sharma','Kanha Dhangar','Preeti Salaria','Saanvi Gupta','Pragyesh Chouhan','Khushi Lowanshi','Anmol Malviya','Gaurang Chouhan','Shivangi Barwal','Prachi Katiyar','Ishita Malviya','Niharika Chouhan','Lakshya Gour','Nitin Sahu','Parth Patil','Anish Kumar','Mahima Kale','Harshita Upadhyay','Vinayak Singh Ranawat','Aashutosh Pandey','Varsha Punase','Hritik Jaiswal','Harshit Patidar','Om Shankar Mishra','Mohd Ayyub Khan','Priyanshi Patidar','Krish Patidar','Siddhi Khatri','Nikhil Soni','Anmol Pandey','Shivam Raikwar','Kajal Kumawat','Nishant Thakor','Mahi Trivedi','Naitik Shrivastava','Khushi Raut','Sujal Sharma','Mansi Kumawat','Sarthak Gupta'
  ];
  const leaderboardList = document.getElementById('leaderboardList');
  const searchInput = document.getElementById('leaderboardSearch');
  let lastSearch = '';
  function renderLeaderboard(filter = '') {
    leaderboardList.innerHTML = '';
    let shown = 0;
    students.forEach((student, idx) => {
      if (student.toLowerCase().includes(filter.toLowerCase())) {
        shown++;
        const card = document.createElement('div');
        card.className = 'leaderboard-card' + (idx % 2 ? ' alt' : '');
        const rank = document.createElement('span');
        rank.className = 'leaderboard-rank';
        rank.textContent = idx + 1;
        const name = document.createElement('span');
        name.className = 'leaderboard-name';
        name.textContent = student;
        card.appendChild(rank);
        card.appendChild(name);
        card.setAttribute("data-animate", "");
        leaderboardList.appendChild(card);
      }
    });
    if (shown === 0) {
      const empty = document.createElement('div');
      empty.className = 'leaderboard-card';
      empty.style.justifyContent = 'center';
      empty.style.color = '#fbbc05';
      empty.textContent = 'No match found.';
      leaderboardList.appendChild(empty);
    }
    setTimeout(() => {
      leaderboardList.querySelectorAll('[data-animate]').forEach(e=>e.classList.add('visible'));
    }, 27);
  }
  renderLeaderboard('');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout); // debounce
      const val = this.value;
      if(val===lastSearch) return;
      lastSearch = val;
      searchTimeout = setTimeout(() => {
        renderLeaderboard(val.trim());
      }, 80);
    });
  }

  // ========== Core Team DATA (placeholder) =============
  const team = [
    { name:'Arjun Patel', position:'Team Lead', year:'3rd Year CSE' },
    { name:'Meera Shah', position:'Event Manager', year:'3rd Year IT' },
    { name:'Rahul Singh', position:'Technical Head', year:'2nd Year CSE' },
    { name:'Priya Ghosh', position:'Design Lead', year:'2nd Year IT' },
    { name:'Harsh Jain', position:'Marketing Head', year:'2nd Year CSE' },
    { name:'Sneha Tiwari', position:'Logistics', year:'3rd Year IT' },
    { name:'Yash Malviya', position:'Content Lead', year:'3rd Year CSE' },
    { name:'Ritika Chawla', position:'Social Media', year:'2nd Year CSE' },
    { name:'Divyansh Sharma', position:'Outreach Head', year:'2nd Year IT' },
    { name:'Preeti Yadav', position:'PR & Partnerships', year:'2nd Year CSE' },
    { name:'Deepak Chauhan', position:'Sponsorship', year:'3rd Year IT' },
    { name:'Aman Soni', position:'Workshop Coordinator', year:'2nd Year CSE' },
    { name:'Juhi Agrawal', position:'Community Lead', year:'3rd Year IT' },
    { name:'Sandhya Joshi', position:'Mentor', year:'3rd Year CSE' },
    { name:'Farhan Siddiqui', position:'Operations', year:'2nd Year IT' }
  ];
  const teamGrid = document.getElementById('coreTeamGrid');
  team.forEach(({name, position, year}) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    const photo = document.createElement('div');
    photo.className = 'team-photo';
    // Placeholder using https://ui-avatars.com/ (or use your own avatars here)
    const img = document.createElement('img');
    img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4285f4&color=fff&rounded=true&size=128`;
    img.alt = name;
    photo.appendChild(img);
    const nm = document.createElement('div');
    nm.className = 'team-name';
    nm.textContent = name;
    const pos = document.createElement('div');
    pos.className = 'team-position';
    pos.textContent = position;
    const yr = document.createElement('div');
    yr.className = 'team-year';
    yr.textContent = year;
    card.appendChild(photo);
    card.appendChild(nm);
    card.appendChild(pos);
    card.appendChild(yr);
    teamGrid.appendChild(card);
  });

  // ========== SCROLL ANIMATIONS =============
  function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    const viewBottom = window.scrollY + window.innerHeight;
    elements.forEach(el => {
      if (el.offsetTop < viewBottom - 30) {
        el.classList.add('visible');
      }
    });
  }

  // Add data-animate attribute to animatable sections
  document.querySelectorAll(".info-card, .circular-progress, .leaderboard-card, .team-card, .about-section").forEach(e => {
    e.setAttribute("data-animate", "");
  });
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Smooth scroll for navbar links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if(section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

