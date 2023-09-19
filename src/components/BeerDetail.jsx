export default function BeerDetail(props) {
  return (
    <div key={props.bottle.id} href={`../bootle/${props.bottle.id}`}
        className="min-h-screen p-6 sm:grid grid-cols-2 gap-10 items-start">
            
        <div className="sticky top-28 bg-white p-10 drop-shadow-lg rounded-xl overflow-hidden flex justify-center">
            <img src={props.bottle.image_url} alt={props.bottle.tagline} className="max-h-[500px] h-auto"/>
        </div>

        <div className={`flex flex-col gap-4 sticky top-10`}>
          <h1 className={`font-semibold text-3xl`}>{props.bottle.name}</h1>

          <div className={`flex justify-between`}>
              <p className={`text-sm`}> Year: <span className={`text-gray_2`}>{props.bottle.first_brewed}</span></p>
              <p className={`text-sm`}>Rating: <span className={`text-gray_2`}>5</span></p>
          </div>

          <p className={`text-sm mb-3`}>{props.bottle.description}</p>

          <table className="w-full">
            <tbody>
              <tr>
                <td><b>ABV</b></td>
                <td>{props.bottle.abv}</td>
              </tr>
              <tr>
                <td><b>ibu</b></td>
                <td>{props.bottle.ibu}</td>
              </tr>
              <tr>
                <td><b>target_fg</b></td>
                <td>{props.bottle.target_fg}</td>
              </tr>
              <tr>
                <td><b>target_og</b></td>
                <td>{props.bottle.target_og}</td>
              </tr>
              <tr>
                <td><b>ebc</b></td>
                <td>{props.bottle.ebc}</td>
              </tr>
              <tr>
                <td><b>srm</b></td>
                <td>{props.bottle.srm}</td>
              </tr>
              <tr>
                <td><b>ph</b></td>
                <td>{props.bottle.ph}</td>
              </tr>
              <tr>
                <td><b>attenuation_level</b></td>
                <td>{props.bottle.attenuation_level}</td>
              </tr>
              <tr>
                <td><b>volume</b></td>
                <td>{props.bottle.volume.value} {props.bottle.volume.unit}</td>
              </tr>
              <tr>
                <td><b>boil_volume</b></td>
                <td>{props.bottle.boil_volume.value} {props.bottle.boil_volume.unit}</td>
              </tr>
              <tr>
                <td><b>Method</b></td>
                <td>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td><b>mash_temp</b></td>
                        <td>{props.bottle.method.mash_temp[0].temp.value} {props.bottle.method.mash_temp[0].temp.unit}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><b>duration:</b></td>
                        <td>{props.bottle.method.mash_temp[0].duration}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><b>fermentation:</b></td>
                        <td>{props.bottle.method.fermentation.temp.value}{props.bottle.method.fermentation.temp.unit}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><b>twist:</b></td>
                        <td>{props.bottle.method.twist}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="font-bold text-lg">Ingredients</h2>
          <table className="w-full">
            <tbody>
              <tr>
                <td><b>Malt</b></td>
                <td>
                  <table className="w-full">
                    <tbody>
                      { props.bottle.ingredients.malt.map( (key, id) => 
                        <tr key={id}> 
                          <td>{key.name}</td>
                          <td>{key.amount.value} {key.amount.unit}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td><b>Hops</b></td>
                <td>
                  <table className="w-full">
                    <tbody>
                      { props.bottle.ingredients.hops.map( (key, id) => 
                        <tr key={id}> 
                          <td>{key.name}</td>
                          <td>{key.amount.value} {key.amount.unit}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td><b>Yeast</b></td>
                <td>{props.bottle.ingredients.yeast}</td>
              </tr>
            </tbody>
          </table>

          <h2 className="font-bold text-lg">Food</h2>
          <ul>
            { props.bottle.food_pairing.map( (food, id) => <li key={id}>- {food}</li> )}
          </ul>

          <p>{props.bottle.brewers_tips}</p>
          <p className={`text-sm text-gray_2`}>{props.bottle.contributed_by}</p>
        </div>
    </div>
  )
}
