const input = document.getElementById("commandInput");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");

terminal.addEventListener("click", () => {
  input.focus();
});

output.innerHTML = 
`<pre style="color: #00ff00;">
          $$\\                             $$\\                     $$\\           
          $$ |                            $$ |                    $$ |          
 $$$$$$\\  $$$$$$$\\   $$$$$$\\  $$\\   $$\\ $$$$$$\\          $$$$$$\\  $$ |$$\\   $$\\ 
 \\____$$\\ $$  __$$\\ $$  __$$\\ $$ |  $$ |\\_$$  _|         \\____$$\\ $$ |$$ |  $$ |
 $$$$$$$ |$$ |  $$ |$$ /  $$ |$$ |  $$ |  $$ |           $$$$$$$ |$$ |$$ |  $$ |
$$  __$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |  $$ |$$\\       $$  __$$ |$$ |$$ |  $$ |
\\$$$$$$$ |$$$$$$$  |\\$$$$$$  |\\$$$$$$  |  \\$$$$  |      \\$$$$$$$ |$$ |\\$$$$$$$ |
 \\_______|\\_______/  \\______/  \\______/    \\____/        \\_______|\\__| \\____$$ |
                                                                      $$\\   $$ |
                                                                      \\$$$$$$  |
                                                                       \\______/</pre><span style="color: white;">Type <span style="color: yellow;">'help'</span> to see list of available commands.</span>
`;


const commands = {
  help: `Available commands: <span style="color: yellow;">likes</span>, <span style="color: yellow;">music</span>, <span style="color: yellow;">books</span>, <span style="color: yellow;">youtube</span>, <span style="color: yellow;">clear</span>, <span style="color: yellow;">help</span>`,
  
  likes: `Things I like:<span style="color: orange;">
☆ legos (i esp love the LEGO® modular buildings)
☆ avatar the last airbender
☆ playing monopoly
☆ working on projects (like this!!!)`,

  music: `Top tracks this month:<span style="color: orange;">
♫ <a class="terminal-link" href="https://open.spotify.com/track/17smYJ6HeUUk8xTTIUtDOs?si=0514aa6d3d1b4628" target="_blank">tell me a lie - griffin house</a>
♫ <a class="terminal-link" href="https://open.spotify.com/track/2KoLrPEzououVnJBBpf6Yu?si=ee648c559759484d" target="_blank">OK city sun - walking on rivers</a></span>`,
  books: `Recent books I read and loved:<span style="color: orange;">
🕮 Time Shelter - Georgi Gospodinov
🕮 Crying in H Mart - Michelle Zauner
🕮 Fahrenheit 451 - Ray Bradbury</span>`,

  youtube: `Favourite youtubers:<span style="color: orange;">
⏯ <a class="terminal-link" href="https://www.youtube.com/johnnyharris" target="_blank">johnny harris</a>
⏯ <a class="terminal-link" href="https://www.youtube.com/@uncivilized_media" target="_blank">uncivilized</a>
⏯ <a class="terminal-link" href="https://www.youtube.com/@ProjectKamp" target="_blank">project kamp</a>
⏯ <a class="terminal-link" href="https://www.youtube.com/@JennaPhipps" target="_blank">jenna phipps</a></span>`,
  
secret: `<a class="terminal-link" href="https://forms.gle/sADxRT8j89JURbTZ6" target="_blank">click me :></a>`,

clear: `clear`
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    const response = commands[command] || `<span style="color: red;">Command not found: ${command}</span>`;

    if (command === "clear") {
      output.innerHTML = "";
    } else {
      output.innerHTML += `<br><span style="color: grey;">> ${command}</span><br>${response}<br>`;
    }

    input.value = "";

    // auto scroll to bottom of terminal each time new command inputted
    setTimeout(() => {
      terminal.scrollTop = terminal.scrollHeight;
    }, 0);
  }
});


terminal.addEventListener("click", () => {
  input.focus();
});

