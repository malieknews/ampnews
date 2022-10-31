type FormProps = {
  form: string
}

export default function Form ({ adsense }: Props) {
  return (
    <>
      <div className="form">{adsense}</div>
      <button type="submit">Submit me!</button>
      <p>
            <label for="myFruit">What is your favorite fruit? (With fallback)</label>
            <input type="text" id="myFruit" name="fruit" list="fruitList">
            <datalist id="fruitList">   <label for="suggestion">or pick a fruit</label>
              <select id="suggestion" name="altFruit">
                <option>Apple</option>
                <option>Banana</option>
                <option>Blackberry</option>
                <option>Blueberry</option>
                <option>Lemon</option>
                <option>Lychee</option>
                <option>Peach</option>
                <option>Pear</option>
              </select>
            </datalist>
     </p>
      <style jsx>{`
        .p {
          color: green;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}



