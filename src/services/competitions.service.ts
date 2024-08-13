import { BASE_URL } from "../config/config";
import { Application, Competition, RegisterCompetition, TCompetitionCard } from "../types";
import { getAccessToken } from "./auth-token.service";
import { request } from "./helpers";

const token = getAccessToken()

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  'Authorization': `Bearer ${token}`,
};

export const CompetitionsService = {
  async getCompetitionsAll(): Promise<TCompetitionCard[]> {
    const response = await request(`${BASE_URL}:8080/public/competitions`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })

    return response;
  },

  async getCompetition(id: number): Promise<Competition> {
    const response = await request(`${BASE_URL}:8080/user/competitions/${id}`, {
      method: "GET",
      headers
    })

    return response;
  },

  async registerCompetition(data: RegisterCompetition): Promise<Application> {
    const response = await request(`${BASE_URL}:8080/user/applications`, {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    })

    return response;
  }
}