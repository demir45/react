import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function armstrong() {
  function sonucYaz() {
    let sayi =
      document.getElementById(
        'input1'
      ).value;

    const control = sayi;
    const temp = parseInt(sayi);
    let kupToplam = 0;
    for (
      let index = 0;
      index < temp.toString().length;
      index++
    ) {
      const basamak = sayi % 10;
      sayi = Math.floor(sayi / 10);

      kupToplam += Math.pow(
        basamak,
        temp.toString().length
      );
    }
    let yazi = '';

    kupToplam == temp
      ? (yazi = 'armstrong sayı')
      : control == ''
      ? (yazi = 'bir sayı giriniz.')
      : (yazi =
          'armstrong sayı değildir.');

    document.getElementById(
      'sonuc1'
    ).innerText = yazi;
  }

  return (
    <div className="App ">
      <div className="container-fluid  text-center">
        <div className="row mx-auto ">
          <div
            className=" col-sm-12
            mb-4
            d-flex
            justify-content-center"
          >
            <div className="tablobutun bg-info border border-dark border-width-5">
              <header className="rounded-pill bg-danger p-4 mb-4 border border-dark border-width-5">
                <h3
                  styles={'color:white'}
                >
                  ARMSTRONG SAYI BUL
                </h3>
              </header>
              <label
                className="label bg-transparent "
                htmlFor="input1 "
              >
                <u className="bg-transparent">
                  <h5>
                    Bir sayı giriniz:
                  </h5>
                </u>
              </label>

              <input
                className="input2 mx-2 mt-4"
                id="input1"
                type="number"
                required="required"
              ></input>

              <button
                className="btn1  btn-success text-dark"
                onClick={sonucYaz}
              >
                Tıkla
              </button>
              <p
                className="sonuc bg-secondary mt-2 mx-auto p-1 "
                id="sonuc1"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
