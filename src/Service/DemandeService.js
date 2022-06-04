import axios from "axios";






export class DemandeService {

  static serverURL = "http://192.168.252.206:4000";


  static getAllDemande() {
    let url = `${this.serverURL}/api/demandes/`;
    return axios.get(url);
  }
  static getAllDemandeByID(idemande) {

    let url = `${this.serverURL}/api/demandes/${idemande}`;
    return axios.get(url);
  }

  static AjoutDemande(demande) {

    let url = `${this.serverURL}/api/demandes/addDemande`;
    return axios.post(url, demande);
  }

  static updateDemande(demande, idemande) {

    let url = `${this.serverURL}/api/demandes/updateDemande/${idemande}`;

    return axios.put(url, {
      header: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'crossDomain': true
      },
    }, demande);
  }




}