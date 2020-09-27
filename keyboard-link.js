        var body=document.querySelector("body");
     body.addEventListener('keydown', function(event) { 
            const key = event.key; 
            if (key === "Backspace" || key === "Delete") { 
                backspace();
            } 
         if (key === "Enter") { 
                equal();
            } 
         if (key === 1) { 
                add(1);
            } 
         if (key === 2) { 
                add(2);
            }
         if (key === 3) { 
                add(3);
            }
         if (key === 4) { 
                add(4);
            }
         if (key === 5) { 
                add(5);
            }
         if (key === 6) { 
                add(6);
            }
         if (key === 7) { 
                add(7);
            }
         if (key === 8) { 
                add(8);
            }
         if (key === 9) { 
                add(9);
            }
         if (key === 0) { 
                add(0);
            }
         if (key === '+') { 
                add('+');
            }
         if (key === '-') { 
                add('-');
            }
         if (key === '*') { 
                add('*');
            }
         if (key === '/') { 
                add('/');
            }
         if (key === 1) { 
                add(1);
            }
         if (key === '.') { 
                add('.');
            }
        });
