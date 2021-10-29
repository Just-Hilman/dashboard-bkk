import React from 'react'

const AddLoker = () => {
    return (
        <div>
            <form>
                <div className="field">
                    <input class="input" type="text" placeholder="Lowongan Pekerjaan">Lowongan Pekerjaan</input>
                </div>

                <div className="field">
                    <input class="input" type="text" placeholder="Perusahaan">Perusahaan</input>
                </div>

                <div className="field">
                    <input class="input" type="text" placeholder="Deskripsi">Deskripsi</input>
                </div>

                <div className="field">
                    <input class="input" type="text" placeholder="Kualifikasi">Kualifikasi</input>
                </div>

                <div className="field">
                    <input class="input" type="date" placeholder="Jadwal Tes">Jadwal Tes Seleksi</input>
                </div>

                <div className="field">
                    <button className="button">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddLoker
