# Build-Week-1

## Descrizione del progetto
Il progetto prevede di ricreare la pagina del quiz di EPICODE. In questo quiz l'utente deve rispondere ad una serie di domande, per ognuna delle quali ha a disposizione da due a quattro opzioni di risposta e 30 secondi di tempo. 
Al termine del quiz l'utente avrà il resoconto del suo test e potrà fornire una valutazione in merito all'esperienza.

## Struttura del progetto
- Welcome Page
- Quiz Page
- Results Page
- Feedback page

## Elementi comuni
Ogni pagina ha una struttura HTML simile. Nell' ```<header>``` si trova un ```<img>``` con il logo di EPICODE all'interno. Anche lo sfondo è lo stesso per tutte le pagine.

### 1) Pagina di Benvenuto
#### Struttura pagina

La pagina HTML 
index.html
 è la prima schermata che compare di fronte all'utente. Qui viene dato il benvenuto all'utente e si trovano le istruzioni con la descrizione del quiz.

In fondo alla pagina è stato inserito un  
```<input type="checkbox">```
 accompagnata da una 
```<label>```
 che chiede agli utenti di promettere di rispondere da soli, senza l'aiuto di nessuno. Di fianco ad essa troviamo un button "PROCEED". 

#### Funzionalità JavaScript

 
Nel file script.js è stato inserito un ```addEventListener```relativo al button, con controllo condizionale. 
Se l'utente ha spuntato la casella della checkbox, e clicca sul pulsante "PROCEED" allora verrà reindirizzato sulla pagina del quiz vero e proprio; se invece l'utente prova a cliccare sul pulsante "PROCEED" prima di aver spuntato la voce descritta in precedenza, comparirà una modale che chiederà all'utente di fare il "check" sulla casella per poter proseguire. 


### 2) Pagina del Quiz

#### Struttura pagina

La pagina HTML ```index2.html``` è la seconda schermata che compare di fronte all'utente, a cui si accede dopo il controllo menzionato precedentemente. Al caricamento della pagina, l'utente vedrà comparire sulla schermata la prima domanda del quiz, sotto la quale saranno presenti le opzioni di risposta. In alto a destra è invece presente un timer circolare della durata di 30 secondi, che indica il tempo rimanente per rispondere al quesito. Ad ogni secondo che passa, la barra si consuma progressivamente.
Anche in questo caso al fondo della pagina è presente un button "PROCEED", che conferma la risposta selezionata e avanza alla domanda successiva. 
Qui sono inseriti dei ```div``` che andranno a contenere i Button aggiunti tramite codice javascript.


#### Funzionalità JavaScript
Nel file ```script2.js``` sono presenti diversi elementi e funzionalità relative a questa pagina.
Al caricamento della pagina viene mostrata la prima domanda dell' ```array question```e le relative opzioni di risposta. Quando l'utente seleziona la risposta, il ```button PROCEED``` viene abilitato. Al click dell'utente sul bottone, se la risposta selezionata corrisponde a quella corretta indicata nell' àrray question, il valore booleano "true", verrà inserito in un ArrayRisposte. Altrimenti non verrà inserito alcun valore. 
Dopo aver selezionato la risposta e fatto click sul pulsante "PROCEED", il contenuto dell'html viene aggiornato mostrando la domanda successiva. Le risposte corrette vengono salvate nel ```localStorage``` in un array contentente una serie di valori "true".
Una volta terminate le domande, fatto click su proceed e terminato il tempo, l'utente viene portato alla pagina dei risultati.









