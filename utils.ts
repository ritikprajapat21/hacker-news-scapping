import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://news.ycombinator.com/";

export type Data = { id: number; title: string; link: string };

export const getData = async () => {
  const res = await axios.get(url);
  const html = res.data;

  const data: Array<Data> = [];
  const $ = cheerio.load(html);

  const list = $("table tr.submission");
  list.find("td:nth-child(3)").each((_: number, el: any) => {
    data.push({
      id: parseInt($(el).parent().attr("id")!),
      title: $(el).text(),
      link: $(el).find("a").attr("href")!,
    });
  });

  return data;
};
