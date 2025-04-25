let totalScore = 0;
        
        document.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', function() {
                const parent = this.closest('.question');
                if (parent.classList.contains('answered')) return;
                
                // Reset selection di question ini
                parent.querySelectorAll('li').forEach(li => {
                    li.classList.remove('selected');
                });
                
                // Select yang baru
                this.classList.add('selected');
                totalScore += parseInt(this.getAttribute('data-score'));
                parent.classList.add('answered');
            });
        });
        
        function finishQuiz() {
            const allAnswered = document.querySelectorAll('.question').length === 
                              document.querySelectorAll('.question.answered').length;
            
            if (!allAnswered) {
                alert("Jangan cabut, jawab semua dong!");
                return;
            }
            
            // Simpan score dan redirect
            localStorage.setItem('genderScore', totalScore);
            window.location.href = "resultco.html";
        }