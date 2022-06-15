export class controleNotas{
    constructor(
        private _pnota: number,
        private _snota: number,
        private _media:number,
    ){}
        public get pnota(): number{
            return this._pnota
        }
        public set pnota(pnota: number){
            this._pnota = pnota
        }
        public get snota(): number{
            return this._snota
        }
        public set snota(snota: number){
            this._snota = snota;
        }

        public get media(): number {
        return this._media;
    } 
       
    public set media(media: number){

         this._media = media;
    }
    avalicao(pnota: number, snota: number): void{
        this.media = (pnota + snota)/2;
        if (this.media >= 60){
            console.log('Aprovado✅')

        }
        if (this.media <= 59.9){
            console.log('Reprovado❌')
        }
        console.log('Media do Bimestre:' + this.media);
    }

}
