import { AnimatePresence, motion } from "framer";
import React, { useMemo } from "react";
import { VaultOptions } from "../../constants/constants";
import { VaultAccount } from "../../models/vault";
import { useGlobalState } from "../../store/store";
import DesktopProductCatalogueGalleryView from "./DesktopProductCatalogueGalleryView";
import ProductCatalogueGridView from "./ProductCatalogueGridView";
import {
  ProductCatalogueProps,
  VaultFilterProps,
  VaultsDisplayVersionProps,
} from "./types";

interface DesktopProductCatalogueProps {
  filteredProducts: VaultOptions[];
  vaultAccounts: {
    [key: string]: VaultAccount | undefined;
  };
}

const DesktopProductCatalogue: React.FC<
  ProductCatalogueProps &
    VaultFilterProps &
    DesktopProductCatalogueProps &
    VaultsDisplayVersionProps
> = ({ variant, ...props }) => {
  const [view, setView] = useGlobalState("desktopView");

  const body = useMemo(() => {
    if (variant === "landing") {
      return (
        <DesktopProductCatalogueGalleryView
          variant={variant}
          setView={setView}
          {...props}
        />
      );
    }

    switch (view) {
      case "grid":
        return (
          <ProductCatalogueGridView
            setView={setView}
            {...props}
            variant="desktop"
          />
        );
      case "gallery":
        return (
          <DesktopProductCatalogueGalleryView
            variant={variant}
            setView={setView}
            {...props}
          />
        );
    }
  }, [props, variant, view, setView]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={view}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          type: "keyframes",
          ease: "easeOut",
        }}
        className="w-100"
      >
        {body}
      </motion.div>
    </AnimatePresence>
  );
};

export default DesktopProductCatalogue;
