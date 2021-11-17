
import MyAlgoConnect from 'myalgo.min.js';

const myAlgoWallet = new MyAlgoConnect();

/*Warning: Browser will block pop-up if user doesn't trigger myAlgoWallet.connect() with a button interation */
const connectToMyAlgo = async() => {
  try {
    const accounts = await myAlgoWallet.connect();

    const addresses = accounts.map(account => account.address);
    
  } catch (err) {
    console.error(err);
  }
}

document.getElementById("connect").addEventListener("click", myAlgoWallet.connect);
