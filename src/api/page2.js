// import http from './http'
import axios from 'axios'

export function getData() {
  return axios.get("/cpdc/outBound", {
    params: {
      serviceId: "AP121A001",
      param: {
        rec_in_page: "100",
        page_jump: "1",
        sts_trace_id: "1",
        Cmpt_ID: "AP201_JYZZS",
        Enqr_Rqs_ID: "P12_JYZZS_IDX_DTL",
        Enqr_Cnd_Cntnt: JSON.stringify({
          idx_id: "'ZK00020001'",
          org_lvl: "1"
        }),
        Enqr_DItm_Set_Inf: JSON.stringify(["__REQUEST_ALL_ITEMS__"])
      }
    }
  })
}
