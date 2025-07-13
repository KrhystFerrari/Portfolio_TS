import { useState, useEffect } from "react";

export const useIsMobile = (maxWidth: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Verificar se é mobile por user agent também
    const checkUserAgent = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    };

    // Verificar largura da tela
    const checkScreenWidth = () => {
      return window.innerWidth <= maxWidth;
    };

    // Função para verificar se é mobile
    const checkIsMobile = () => {
      return checkUserAgent() || checkScreenWidth();
    };

    // Definir valor inicial
    setIsMobile(checkIsMobile());

    // Listener para mudanças no tamanho da tela
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
