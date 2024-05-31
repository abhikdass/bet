document.getElementById('bettingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const startBet = parseFloat(document.getElementById('startBet').value);
    const rounds = parseInt(document.getElementById('rounds').value);
    const multipler = parseFloat(document.getElementById('multipler').value);
    const onloss = parseFloat(document.getElementById('OnLoss').value);
    
    let bet = startBet;
    let totalBet = 0;
    let results = [];
    results.push(`Betting Start With ${bet.toFixed(2)} Per Loss Increase By ${onloss} %`);
    for (let i = 0; i < rounds; i++) {
        results.push(`Round ${i + 1}: Bet = ${bet.toFixed(2)} :: !! Win: ${(bet * multipler).toFixed(2)} ,Profit =  ${((bet * multipler) -totalBet).toFixed(2) } `);
        totalBet += bet;
        bet *= (100+onloss)/100;
    }

    results.push(`Total bet amount after ${rounds} Total Bet Amount: ${totalBet.toFixed(2)}\n`);
    
    document.getElementById('results').innerHTML = `
        <h1>Betting Results</h1>
        <ul>
            ${results.map(result => `<li>${result}</li>`).join('')}
        </ul>
        <center><a href="/">Go Back</a></center>
    `;
});
