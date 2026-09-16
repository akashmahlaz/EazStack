import { useEffect } from "react";

const Seo = ({ title, description }: { title?: string; description?: string }) => {
  useEffect(() => {
    if (!title) return;
    document.title = title;
    const set = (sel: string, attr: string, val: string) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', "content", description ?? "");
    set('meta[property="og:title"]', "content", title);
    if (description) set('meta[property="og:description"]', "content", description);
    set('meta[name="twitter:title"]', "content", title);
    if (description) set('meta[name="twitter:description"]', "content", description);
  }, [title, description]);
  return null;
};

export default Seo;
