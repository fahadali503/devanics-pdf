import { PDF_NAVBAR_BG } from "@/constants/bg.constants";

export function PdfNavbar() {
    return (
        <header className={`px-[38px] w-full flex items-center ${PDF_NAVBAR_BG} h-[64px]`}>
            <div className="container mx-auto flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                    Schesti
                </span>
            </div>
        </header>
    )
}