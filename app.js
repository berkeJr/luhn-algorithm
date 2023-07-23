// Validation For Credit Card Numbers Using Luhn Algorithm

const validateCreditCardNumber = (input) => {
  // Kredi kartı numarasını sayısal bir diziye dönüştürme
  let creditCardInt = input.split("").map(Number);

  // Luhn Algoritması gereği her ikinci basamağı sondan başlayarak ikiyle çarparız
  for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
    // Seçilen her ikinci basamağı geçici bir değişkende saklarız
    let tempValue = creditCardInt[i];

    // Seçilen basamağı ikiyle çarparız
    tempValue = tempValue * 2;

    /* Eğer ikiyle çarpma sonucu elde edilen değer 9'dan büyükse 
        sonuç iki basamaklı bir sayı olacağından dolayı basamaklar toplanarak düzeltilir */
    if (tempValue > 9) {
      tempValue = (tempValue % 10) + 1;
    }

    // Düzeltme yapılan değerin orjinal dizideki ilgili basamağın üzerine yazılması
    creditCardInt[i] = tempValue;
  }

  // Tüm basamakların toplamınının hesaplanması
  let total = 0;
  for (let i = 0; i < creditCardInt.length; i++) {
    total += creditCardInt[i];
  }

  /* Toplamın 10'a bölümünden kalanı kontrol edilmesi ve kredi kartı numarasının geçerli 
        olup olmadığının belirlenmesi */
  return total % 10 === 0;
};

module.exports = validateCreditCardNumber;
